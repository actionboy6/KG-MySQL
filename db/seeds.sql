INSERT INTO department (department_name)
VALUES ('SALES'),
        ('ENGINEERING'),
        ('FINANCE'),
        ('LEGAL'),
        ('EXECUTIVES'),
        ('DEVELOPERS');

INSERT INTO role(title, salary, department_id)
VALUES  ('SALESPERSON', 60000, 101),
        ('LEAD ENGINEER', 150000, 102),
        ('ENGINEER', 90000, 102 ),
        ('SOFTWARE ENGINEER', 85000, 102),
        ('ACCOUNT MANAGER', 70000, 103);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Kevin', 'Smith', 102, NULL),
        ('Tyler', 'Leavy', 101, NULL),
        ('Lisa', 'Simpson', 102, 201),
        ('Peter', 'Griffin', 103, 202),
        ('Wade', 'Wilson', 104, 203); 