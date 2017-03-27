function drawQuickSort(container, info) {
    var array = info.array;
    var html = '';
    for (var i = 0, len = array.length; i < len; i++) {
        if (i == info.keyIndex) {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:red;"></div>';
        } else if (i == info.compareIndex) {
            if (info.flag == 'big') {
                html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:yellow;"></div>';
            } else {
                html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:#1593E8;"></div>';
            }
        } else if (i >= info.start && i <= info.end) {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:black;"></div>';
        } else {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:#9BF703;"></div>';
        }

    }
    html = '<div class="row row-bottom" >' + html + '</div>';
    container.innerHTML = html;

}

function quickSort(array, stack) {
    var sortFn = function(start, end) {
        if (start == end) return;
        var oStart = start,
            oEnd = end,
            key = array[start];
        var keyIndex = start;
        stack.add({
            array: array.slice(0),
            keyIndex: keyIndex,
            compareIndex: -1,
            start: oStart,
            end: oEnd
        });
        while (start < end) {
            stack.add({
                array: array.slice(0),
                keyIndex: keyIndex,
                compareIndex: end,
                flag: 'small',
                start: oStart,
                end: oEnd
            });
            if (key <= array[end]) {
                end--;
            } else {
                array[start] = array[end];
                array[end] = key;
                keyIndex = end;
                stack.add({
                    array: array.slice(0),
                    keyIndex: keyIndex,
                    compareIndex: end,
                    flag: 'small',
                    start: oStart,
                    end: oEnd
                });
                while (end > ++start) {
                    stack.add({
                        array: array.slice(0),
                        keyIndex: keyIndex,
                        compareIndex: start,
                        flag: 'big',
                        start: oStart,
                        end: oEnd
                    });
                    if (array[start] > key) {
                        array[end] = array[start];
                        end--;
                        array[start] = key;
                        keyIndex = start;
                        stack.add({
                            array: array.slice(0),
                            keyIndex: keyIndex,
                            compareIndex: start,
                            flag: 'big',
                            start: oStart,
                            end: oEnd
                        });
                        break;
                    }
                }
            }
        }
        if (start == oStart) {
            sortFn(++oStart, oEnd);
            return;
        }
        // array[start] = key;
        if (start == oEnd) {
            sortFn(oStart, --oEnd);
            return;
        }
        sortFn(oStart, --start);
        sortFn(++end, oEnd);
    }
    sortFn(0, array.length - 1);
    stack.add({
        array: array.slice(0),
        keyIndex: -1,
        compareIndex: -1,
        flag: '',
        start: -1,
        end: -1
    });
    return array;
}
