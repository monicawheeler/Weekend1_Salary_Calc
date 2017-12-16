console.log('client.js is sourced');

$(document).ready(salaryCalcApp);

function salaryCalcApp() {
  // Event Listeners
  $('.submit-button').on('click', createEmployee);
  $('.employee-table-body').on('click', '.delete-button', deleteRow);

  function createEmployee() {
    // Define the input fields
    var firstName = $('.input-field-fName');
    var lastName = $('.input-field-lName');
    var idNumber = $('.input-field-id');
    var title = $('.input-field-title');
    var salary = $('.input-field-salary');

    // get the values from the inputs
    var $firstName = $('.input-field-fName').val();
    var $lastName = $('.input-field-lName').val();
    var $idNumber = $('.input-field-id').val();
    var $title = $('.input-field-title').val();
    var $salary = $('.input-field-salary').val();

    // Append values to DOM
    $row = $('<tr class="employee-row">');
    $row.append('<td>' + $firstName + ' ' + $lastName + '</td>');
    $row.append('<td>' + $idNumber + '</td>');
    $row.append('<td>' + $title + '</td>');
    $row.append('<td class="annual-salary">' + $salary + '</td>');
    $row.append('<button class="delete-button">Delete</button>');

    $('.employee-table-body').prepend($row);

    // Clear input fields
    firstName.val('');
    lastName.val('');
    idNumber.val('');
    title.val('');
    salary.val('');

    // CALCULATIONS
    // Get the total of all employee salaries (TOTAL ANNUAL)
    var salaryTotal = 0;
    $('.annual-salary').each(function() {
      var salaryItem = Number($(this).text());
      salaryTotal += salaryItem;
    });

    // Get the count of employees
    var employeeCount = $('.annual-salary').length;

    // Calculate the total salaries divided by employee length and remove decimals
    var averageMonthlySalary = ((salaryTotal/employeeCount)/12).toFixed(0);

    // append to end of table
    $('.monthly-total').text((salaryTotal/12).toFixed(0));
    $('.annual-total').text(salaryTotal);
    $('.average-total').text(averageMonthlySalary);

    //
    // // Create the Employee class
    // class Employee {
    //   constructor() {
    //     this.firstName = $firstName;
    //     this.lastName = $lastName;
    //     this.idNumber = $idNumber;
    //     this.jobTitle = $jobTitle;
    //     this.annualSalary = $annualSalary;
    //   }
    // }
    //


  }

  // HARD MODE
  // Delete button removes employee from DOM

  // Add event listener above
  // Function to delete the clicked row

  function deleteRow() {
    $(this).parents('tr').remove();
  }

} // end salaryCalcApp




// PRO MODE
// After deleting employee, update total spend on salaries account
