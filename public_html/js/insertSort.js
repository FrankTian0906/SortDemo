
function insertSortDom(arr,a,b,temp){

	var html='',item= '',spanClass='',len = arr.length,i;
	for (i = 0; i <len; i++) {

		spanClass = 'sort_span';

		if(i<=a){
			spanClass += ' sort_span_blue';
		}

		item = '<li class="sort_li">\n\
                            <span class="'+ spanClass +'" style="height: '+arr[i]+'%">\n\
                        </span></li>';

		if(i === b){
		item = 	'<li class="sort_li">\n\
                            <span class="'+ spanClass +'" style="height: '+arr[i]+'%"></span>\n\
                            <span class="sort_span_in" style="height:'+temp+'%"></span>\n\
                        </li>';
		}
		
		html= html+item;
	}

	document.querySelector('.sort_ul').innerHTML = html;

}


function insertSort(oriArr){
	var arr = oriArr.slice(),i,j,len=arr.length,temp;

	for (i = 1; i < len; i++) {				
		temp = arr[i];
		for (j=i-1; j >-1; j--) {
			if(arr[j]>temp){
				arr[j+1] = arr[j];
				this.pushHis(arr.slice(),i-1,j+1,temp);
			}else{
				break;
			}
		}
		arr[j+1] = temp;
		this.pushHis(arr.slice(),i,j,temp);
	}
	return arr;
}

