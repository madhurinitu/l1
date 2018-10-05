function calculateElectriciyCharges() {
    var consumer_no = document.getElementById('cno').value;
    var consumer_name = document.getElementById('cname').value;
    var email_addr = document.getElementById('mail').value;
    var Number_of_units = document.getElementById('nou').value;
    var ebill;
    if (consumer_no.length == 8) {
        if (consumer_name.length >= 3) {
            var mail_reg = /^[a-zA-Z0-9.]+[@][a-zA-Z]+[.][a-zA-Z]+$/;
            if (email_addr.match(mail_reg)) {
                if (Number_of_units.length > 0) {
                    if (Number_of_units <= 100) {
                        ebill = Number_of_units * 2.96;
                    } else {
                        ebill = Number_of_units * 5.56;
                    }
                    alert(consumer_no + " "  + consumer_name + " " + email_addr + " " + Number_of_units + " " + ebill);
                    return true;
                } else {
                    alert('enter number of units')
                }
            } else {
                alert("invalid email id")
            }
        } else {
            alert('consumer name must be min 3 charaters in length')
        }
    } else {
        alert('consumer number should be 8 digits')
    }
    
    return false;
}
 