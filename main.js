/**
    冒泡排序算法
*/
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

/**
    快速排序算法
*/

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
        if (start == oStart) { //当前选中的key是最小值
            sortFn(++oStart, oEnd);
            return;
        }
        array[start] = key;
        if (start == oEnd) { //当前选中的key是最大值
            sortFn(oStart, --oEnd);
            return;
        }
        sortFn(oStart, --start);
        sortFn(++end, oEnd);
    }
    sortFn(0, array.length - 1);
    return array;
}


/**
    直接插入排序算法
*/

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

/**
    希尔排序算法
*/

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


/**
    归并排序算法
*/

//第一种实现
function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    return result.concat(left).concat(right);
}

function mergeSort(array) {
    var len = array.length;
    if (len <= 1) return array;
    var mid = (len / 2) >> 0;
    var left = array.slice(0, mid);
    var right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

//第二种实现
function merge2(left, right) {
    var i = 0,
        j = 0,
        rLen = right.length,
        lLen = left.length,
        result = [];
    while (i < lLen && j < rLen) {
        if (left[i] > right[j]) {
            result.push(right[j]);
            j++
        } else {
            result.push(left[i]);
            i++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort2(array) {
    var len = array.length;
    if (len <= 1) return array;
    var mid = (len / 2) >> 0;
    return merge2(mergeSort2(array.splice(0, mid)), mergeSort2(array));
}

//merge2方法比merge的效率高很多，因为merge创建分割数组的开销太大;mergeSort2的效率比mergeSort高，同理


/**
    选择排序算法
*/

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


/**
    堆排序算法
*/

function heapSort(array) {
    var len = array.length;

    function swap(i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    function buildHeap(i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var last = i;
        if (left < len && array[left] > array[last]) {
            last = left;
        }
        if (right < len && array[right] > array[last]) {
            last = right;
        }
        if (last != i) {
            swap(last, i);
            buildHeap(last);
        }
    }
    for (var i = ((len / 2) >> 0); i >= 0; i--) {
        buildHeap(i);
    }
    for (var j = len - 1; j >= 0; j--) {
        swap(j, 0);
        len--;
        buildHeap(0);
    }
