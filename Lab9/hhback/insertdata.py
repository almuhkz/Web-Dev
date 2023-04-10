import os
import django



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hhback.settings')
django.setup()
import json
from api.models import Company, Vacancy


# Load data from JSON file
with open('package.json') as f:
    data = json.load(f)

# Create companies
companies = []
for company_data in data['companies']:
    company = Company(
        name=company_data['name'],
        description=company_data['description'],
        city=company_data['city'],
        address=company_data['address']
    )
    companies.append(company)

# Bulk create companies
Company.objects.bulk_create(companies)

# Create vacancies
vacancies = []
for vacancy_data in data['vacancies']:
    # Get the company object for this vacancy
    company_id = vacancy_data.pop('company_id')
    company = Company.objects.get(id=company_id)

    # Create the vacancy object
    vacancy = Vacancy(company=company, **vacancy_data)
    vacancies.append(vacancy)

# Bulk create vacancies
Vacancy.objects.bulk_create(vacancies)
