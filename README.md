# Password Generator Starter Code
WHEN I click the button
THEN I am prompted with selecting password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for length of the password
THEN I choose a length of at least 8, and no more than 128
-- if not in bounds, show alert and abort

WHEN asked for character types
THEN I confirm whether or not to include:
lowercase, uppercase, numeric, and/or special chars
-- confirm, yes/no

WHEN I answer each prompt
THEN my input should be validated and at least one char is selected

WHEN all prompts are answered
THEN a password is generated that matches the criteria

WHEN the password is generated
THEN the password is either displayed in an alert or 
written to the page