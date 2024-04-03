function calculate_payee(gross_salary):
    if gross_salary <= 24000:
        return 0
    elif 24001 <= gross_salary <= 32333:
        return (gross_salary - 24000) * 0.1
    else if 32334 <= gross_salary <= 40333:
        return 833 + (gross_salary - 32333) * 0.15
    elif 40334 <= gross_salary <= 60333:
        return 2500 + (gross_salary - 40333) * 0.2
    elif 60334 <= gross_salary <= 82333:
        return 7500 + (gross_salary - 60333) * 0.25
    else:
        return 13750 + (gross_salary - 82333) * 0.3

function calculate_nssf_deductions(basic_salary):
    return min(0.06 * basic_salary, 2000)

