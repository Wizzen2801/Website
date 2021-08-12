```javascript
    <input type='button' value='night' onclick="
        if(document.querySelector('body').dataset.mode === 'day'){
            document.querySelector('body').style.backgroundColor='black';
            document.querySelector('body').style.color='white';
            document.querySelector('body').dataset.mode = 'night';
            this.value = 'day';
        }
        else {
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('body').style.color='black';
        document.querySelector('body').dataset.mode = 'day';
        this.value = 'night';
        }
    ">
```