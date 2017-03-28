# javascript排序算法，

## 冒泡排序


![运行效果图](https://github.com/qliduan/javascript-sort/blob/master/img/bubleSort.gif)

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
![运行效果图](https://github.com/qliduan/javascript-sort/blob/master/img/quickSort.gif)
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
## 插入排序
![运行效果图](https://github.com/qliduan/javascript-sort/blob/master/img/insertSort.gif)
```javascript

    function insertSort(array) {
        var len = array.length,
            j, key;
        for (var i = 1; i < len; i++) {
            key = array[i];
            j = i;
            while (--j > -1) {
                if (array[j] > key) {
                    array[j + 1] = array[j];
                } else {
                    break;
                }
            }
            array[j + 1] = key;
        }
        return array;
    }

```
## 希尔排序
![运行效果图](https://github.com/qliduan/javascript-sort/blob/master/img/shellSort.gif)
```javascript

    function shellSort(array) {
        var len = array.length;
        var gap = 1;
        while (gap < len / 3) {
            gap = gap * 3 + 1;
        }
        var i, j, temp;
        while (gap > 0) {
            for (i = gap; i < len; i++) {
                for (j = i; j >= gap; j -= gap) {
                    if (array[j - gap] > array[j]) {
                        temp = array[j];
                        array[j] = array[j - gap];
                        array[j - gap] = temp;
                    }
                }
            }
            gap = (gap - 1) / 3;
        }
        return array;
    }

```
## 选择排序
![运行效果图](https://github.com/qliduan/javascript-sort/blob/master/img/selectSort.gif)
```javascript

    function selectSort(array) {
        var len = array.length;
        var temp, index, i, j;
        for (i = 0; i < len - 1; i++) {
            index = i;
            for (j = i + 1; j < len; j++) {
                if (array[j] < array[index]) {
                    index = j;
                }
            }
            if (index != i) {
                temp = array[index];
                array[index] = array[i];
                array[i] = temp;
            }
        }
        return array;
    }

```