    function drawSelectSort(container, info) {
        var array = info.array;
        var html = '';
        for (var i = 0, len = array.length; i < len; i++) {
            if (i == info.index) {
                html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:red;"></div>';
                continue;
            }
            if (i == info.minIndex) {
                html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:blue;"></div>';
                continue;
            }
            if (i == info.compareIndex) {
                html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:yellow;"></div>';
                continue;
            }
            if (i < info.index) {
                html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:#9BF703;"></div>';
            } else {
                html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:black;"></div>';
            }
        }
        html = '<div class="row row-bottom" >' + html + '</div>';
        container.innerHTML = html;

    }

    function selectSort(array, stack) {
        var len = array.length;
        var temp, index, i, j;
        for (i = 0; i < len - 1; i++) {
            index = i;

            for (j = i + 1; j < len; j++) {
                stack.add({
                    array: array.slice(0),
                    index: i,
                    minIndex: index,
                    compareIndex: j
                });
                if (array[j] < array[index]) {
                    index = j;
                    stack.add({
                        array: array.slice(0),
                        index: i,
                        minIndex: index,
                        compareIndex: j
                    });
                }
            }
            if (index != i) {
                temp = array[index];
                array[index] = array[i];
                array[i] = temp;
                stack.add({
                    array: array.slice(0),
                    index: i,
                    minIndex: -1,
                    compareIndex: -1
                });
            }
        }
        stack.add({
            array: array.slice(0),
            index: array.length,
            minIndex: -1,
            compareIndex: -1
        });
        return array;
    }
