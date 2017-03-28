    function drawShellSort(container, info) {
        var array = info.array;
        var html = '';
        for (var i = 0, len = array.length; i < len; i++) {
            if (i == info.index || i == info.compareIndex) {
                if (i == info.compareIndex) {
                    html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:yellow;"></div>';
                } else {
                    html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:red;"></div>';
                }

            } else {
                html += '<div class="col normal" style="height:' + array[i] + 'px;background-color:#9BF703;"></div>';
            }

        }
        html = '<div class="row row-bottom" >' + html + '</div>';
        container.innerHTML = html;
    }

    function shellSort(array, stack) {
        var len = array.length;
        var gap = 1;
        while (gap < len / 3) {
            gap = gap * 3 + 1;
        }
        var i, j, temp;
        while (gap > 0) {
            for (i = gap; i < len; i++) {
                for (j = i; j >= gap; j -= gap) {
                    stack.add({
                        array: array.slice(0),
                        index: j,
                        compareIndex: j - gap,
                        gap: gap
                    });
                    if (array[j - gap] > array[j]) {
                        temp = array[j];
                        array[j] = array[j - gap];
                        array[j - gap] = temp;
                        stack.add({
                            array: array.slice(0),
                            index: j,
                            compareIndex: j - gap,
                            gap: gap
                        });
                    }
                }
            }
            gap = (gap - 1) / 3;
        }
        stack.add({
            array: array.slice(0),
            index: -1,
            compareIndex: -1,
            gap: -1
        });
        return array;
    }
