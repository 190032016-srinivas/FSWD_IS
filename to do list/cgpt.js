document.addEventListener('DOMContentLoaded', function() {
    const userDataInput = document.getElementById('userData');
    const saveButton = document.getElementById('saveButton');
    const parent = document.body;
    if(!(localStorage.getItem('user_data'))){
        console.log('not found set')
        localStorage.setItem('user_data','sri hyu')
       
    }
    let val_arr = localStorage.getItem('user_data').split(' ')
    console.log('val_arr=',val_arr)

    // userDataInput.value = localStorage.getItem('userData') || '';

    // Save data to local storage when save button is clicked
    saveButton.addEventListener('click', function() {
        const userData = userDataInput.value.trim();

        if (userData !== '') {
            let prev = localStorage.getItem('user_data')+userData
            localStorage.setItem('userData', prev);
            alert('Data saved successfully!');
        } else {
            alert('Please enter some data.');
        }
    });
});
