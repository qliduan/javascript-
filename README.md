# javascript排序算法


## 冒泡排序
```javascript

function bubbleSort(array) {
    var len = array.length;
    if (len <= 1) return array;
    var len1 = len - 1,
        i = 0,
        j = 0,
        temp;
    for (i = 0; i < len1; i++) {
        for (j = i + 1; j < len; j++) {
            if (array[j] < array[i]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

```

## 快速排序
```javascript

    function quickSort(array) {
        var sortFn = function(start, end) {
            if (start == end) return;
            var oStart = start,
                oEnd = end,
                key = array[start];
            while (start < end) {
                if (key <= array[end]) {
                    end--;
                } else {
                    array[start] = array[end];
                    while (end > ++start) {
                        if (array[start] > key) {
                            array[end] = array[start];
                            end--;
                            break;
                        }
                    }
                }
            }
            if (start == oStart) {
                sortFn(++oStart, oEnd);
                return;
            }
            array[start] = key;
            if (start == oEnd) {
                sortFn(oStart, --oEnd);
                return;
            }
            sortFn(oStart, --start);
            sortFn(++end, oEnd);
        }
        sortFn(0, array.length - 1);
        return array;
    }

```
