function drawInsertSort(container, info) {
    var array = info.array;
    var html = '';
    for (var i = 0, len = array.length; i < len; i++) {
        if (i == info.insertIndex) {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:red;"></div>';
        } else if (i == info.compareIndex) {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:yellow;"></div>';
        } else if (i <= info.hasOrder) {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:#9BF703;"></div>';
        } else {
            html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:black;"></div>';
        }
    }
    html = '<div class="row row-bottom" >' + html + '</div>';
    container.innerHTML = html;

}

function insertSort(array, stack) {
    var len = array.length,
        j, key;
    for (var i = 1; i < len; i++) {
        key = array[i];
        j = i;
        stack.add({
            array: array.slice(0),
            insertIndex: i,
            compareIndex: j,
            hasOrder: i
        });
        while (--j > -1) {
            stack.add({
                array: array.slice(0),
                insertIndex: -1,
                compareIndex: j,
                hasOrder: i
            });
            if (array[j] > key) {
                array[j + 1] = array[j];
                array[j] = key;
                stack.add({
                    array: array.slice(0),
                    insertIndex: j,
                    compareIndex: -1,
                    hasOrder: i
                });
            } else {
                break;
            }
        }
        // array[j + 1] = key;

    }
    stack.add({
        array: array.slice(0),
        insertIndex: -1,
        compareIndex: -1,
        hasOrder: array.length - 1
    });
    return array;
}
