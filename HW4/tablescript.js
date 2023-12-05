// Name: Angel Solares
// File: tableScript.js
// Date: 12/4/23
// GUI Assignment: Creates a multiplication table generator.

$.validator.addMethod("greaterThanStart", function (value, element, param) {
  const startValue = parseInt($(param).val());
    const endValue = parseInt(value);
    return endValue >= startValue;
 
    return value >= $(param).val();
}, "End value should not be smaller than the start value.");


$(document).ready(function () {
    
    $('#multiplicationForm').validate({
        rules: {
            startMultiplier: {
                required: true,
                number: true
            },
            endMultiplier: {
                required: true,
                number: true,
                greaterThanStart: "#startMultiplier" // Validate against the startMultiplier field
            },
            startMultiplicand: {
                required: true,
                number: true
            },
            endMultiplicand: {
                required: true,
                number: true,
                greaterThanStart: "#startMultiplicand" // Validate against the startMultiplicand field
            }
        },
        messages: {
            startMultiplier: {
                required: "&nbsp;&nbsp; Please enter a start multiplier.&nbsp;&nbsp;",
                number: "&nbsp;&nbsp;Please enter a valid number.; &nbsp;&nbsp;"
            },
            endMultiplier: {
                required: "&nbsp;&nbsp; Please enter an end multiplier.",
                number: "&nbsp;&nbsp; Please enter a valid number."
            },
            startMultiplicand: {
                required: "&nbsp;&nbsp;Please enter a start multiplicand.&nbsp;&nbsp;",
                number: "&nbsp;&nbsp;Please enter a valid number."
            },
            endMultiplicand: {
                required: "Please enter an end multiplicand.",
                number: "Please enter a valid number."
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element); // Position error messages after the input fields
        },
        submitHandler: function(form) {
            if ($('#multiplicationForm').valid()) {
                generateTable(); // Proceed with table generation if the form is valid
            } else {
                alert("Please fill all fields correctly."); // Show an error message if form is invalid
            }
            return false; // Prevent form submission
        }
        
    });
    
}); 
    
    function generateTable() {
        const startMultiplier = parseInt($('#startMultiplier').val());
        const endMultiplier = parseInt($('#endMultiplier').val());
        const startMultiplicand = parseInt($('#startMultiplicand').val());
        const endMultiplicand = parseInt($('#endMultiplicand').val());
    
        const minRange = -50;
        const maxRange = 50;
    
        const validStartMultiplier = Math.max(minRange, Math.min(maxRange, startMultiplier));
        const validEndMultiplier = Math.max(minRange, Math.min(maxRange, endMultiplier));
        const validStartMultiplicand = Math.max(minRange, Math.min(maxRange, startMultiplicand));
        const validEndMultiplicand = Math.max(minRange, Math.min(maxRange, endMultiplicand));
    
        // if (isNaN(validStartMultiplier) || isNaN(validEndMultiplier) || isNaN(validStartMultiplicand) || isNaN(validEndMultiplicand)) {
        //     alert("Please enter valid numbers for all fields.");
        //     return;
        // }
    
        // if (validStartMultiplier >= validEndMultiplier || validStartMultiplicand >= validEndMultiplicand) {
        //     alert("Please ensure that the start number is smaller than the end number.");
        //     return;
        // }
    
        let tableHTML = '<tr><th></th>';
        
        for (let i = validStartMultiplier; i <= validEndMultiplier; i++) {
            tableHTML += `<th>${i}</th>`;
        }
        tableHTML += '</tr>';
    
        for (let i = validStartMultiplicand; i <= validEndMultiplicand; i++) {
            tableHTML += `<tr><th>${i}</th>`;
            for (let j = validStartMultiplier; j <= validEndMultiplier; j++) {
                tableHTML += `<td>${i * j}</td>`;
            }
            tableHTML += '</tr>';
        }
    
        $('#tableBody').html(tableHTML);
    }
