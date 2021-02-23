let popunjeniElementi = true;

function zastita() {
    popunjeniElementi = true;
    for (let i = 10; i < 20; i++) {
        let izbor = `izbor${i}`;
        console.log(izbor);
        let vrednost = document.getElementById(izbor).value;
        if (vrednost !== "" && popunjeniElementi === true) {

        } else {
            if (popunjeniElementi === true) {
                popunjeniElementi = false;
                alert(`Molimo proverite da li su polja popunjena!!!`);
            }
        }
    }
    if (popunjeniElementi === true) {
        writeData();
    }
}

function clearField() {
    for (let i = 10; i < 65; i++) {
        try {

            document.getElementById(`izbor${i}`).value = "";


        } catch (error) {

        }

    }
}