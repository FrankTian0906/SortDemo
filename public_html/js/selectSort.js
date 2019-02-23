
function selectSort(oriArr) {

    var arr = oriArr.slice(), i, j, k, len = arr.length, temp;
    for (i = 0; i < len - 1; i++) {
        k = i;
        temp = arr[i];
        for (j = i + 1; j < len; j++) {
            if (temp > arr[j]) {
                temp = arr[j];
                k = j;
            }
            this.pushHis(arr.slice(), i - 1, j, k, temp);
        }
        arr[k] = arr[i];
        arr[i] = temp;
        this.pushHis(arr.slice(), i);
    }
    return arr;
}

function selectSortDom(arr, a, b, c, temp) {

    var html = '', item = '', spanClass = '', len = arr.length, i;
    for (i = 0; i < len; i++) {

        spanClass = 'sort_span';

        if (i <= a) {
            spanClass += ' sort_span_blue';
        }
        if (c === i) {
            spanClass += ' sort_span_tag';
        }

        if (i === b) {
            item = '<li class="sort_li">\n\
                        <span class="' + spanClass + '" style="height: ' + arr[i] + '%"></span>\n\
                        <span class="sort_span_in" style="height:' + temp + '%"></span>\n\
                    </li>';
        } else {
            item = '<li class="sort_li">\n\
                        <span class="' + spanClass + '" style="height: ' + arr[i] + '%"></span>\n\
                    </li>';
        }

        html = html + item;
    }
    document.querySelector('.sort_ul').innerHTML = html;
}
