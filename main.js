var btnGenerate = document.getElementById('generate-btn');
var result = document.getElementById('result');
var inputNumber = document.getElementById('input-number');
var bblSort = document.getElementById('bubble-sort');
var selSort = document.getElementById('selection-sort');
var insSort = document.getElementById('insertion-sort');


btnGenerate.addEventListener('click', function() {
    var nums = [];
    var numInput = inputNumber.value;
    for (var i = 0; i < numInput; i++) {
        var num = Math.floor(Math.random() * 100 + 1);
        nums.push(num);
    }
    result.setAttribute('value', (nums.join(',')));
    
    if (numInput == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Masukkan Angka Terlebih Dahulu',
            footer: 'Random Generator'
        })
    } else {
        let startTimeBbl = performance.now();
        bubbleSort(nums);
        let endTimeBbl = performance.now();
        let timeTakenBbl = (endTimeBbl - startTimeBbl) / 1000;
        let timeSpesificBbl = timeTakenBbl.toFixed(6);
        document.getElementById('bubble-time').textContent = timeSpesificBbl;
        bblSort.setAttribute('value', (nums.join(', ')));
        let startTimeSel = performance.now();
        selectionSort(nums);
        let endTimeSel = performance.now();
        let timeTakenSel = (endTimeSel - startTimeSel) / 1000;
        let timeSpesificSel = timeTakenSel.toFixed(6);
        document.getElementById('selection-time').textContent = timeSpesificSel;
        selSort.setAttribute('value', (nums.join(', ')));
        let startTimeInsert = performance.now();
        insertionSort(nums);
        let endTimeInsert = performance.now();
        let timeTakenInsert = (endTimeInsert - startTimeInsert) / 1000;
        let timeSpesificInsert = timeTakenInsert.toFixed(6);
        document.getElementById('insertion-time').textContent = timeSpesificInsert;
        insSort.setAttribute('value', (nums.join(', ')));
    }
});

function bubbleSort(arr) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < arr.length -1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i;
        
        while (j > 0 && arr[j -1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}