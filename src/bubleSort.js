function bubbleSort(array, stack) {
    var len = array.length;
    if (len <= 1) return array;
    var len1 = len - 1,
        i = 0,
        j = 0,
        temp;
    for (i = 0; i < len1; i++) {
        for (j = i + 1; j < len; j++) {
            if (array[j] < array[i]) {
                stack.add({
                    array: array.slice(0),
                    index: i,
                    compareIndex: j
                });
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                stack.add({
                    array: array.slice(0),
                    index: i,
                    compareIndex: j
                });
            } else {
                stack.add({
                    array: array.slice(0),
                    index: i,
                    compareIndex: j
                });
            }
        }
    }
    stack.add({
        array: array.slice(0),
        index: -1,
        compareIndex: -1
    });
    return array;
}

function drawBubbleSort(container, info) {
    var array = info.array;
    var html = '';
    for (var i = 0, len = array.length; i < len; i++) {
        if (i == info.index) {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:red"></div>';
        } else if (i == info.compareIndex) {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:yellow"></div>';
        } else {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:#9BF703"></div>';
        }
    }
    html = '<div class="row row-bottom" >' + html + '</div>';
    container.innerHTML = html;
}
