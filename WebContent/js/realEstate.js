var columns = [{
	checkbox: true
}, {
	field: "number",
	title: "<span class='glyphicon glyphicon-tags' aria-hidden='true' ></span>资产编号",
	halign: "center"
}, {
	field: "name",
	title: "资产名称",
	halign: "center"
}, {
	field: 'city',
	title: '城市',
	halign: "center"
}, {
	field: 'unit',
	title: '购买单位',
	halign: "center"
}, {
	field: 'area',
	title: '登记面积（m²）',
	halign: "center"
}, {
	field: 'equity',
	title: '产权类型',
	halign: "center"
}, {
	title: '库存类型',
	halign: "center",
	formatter: function(value, row, index) {
		return '<button class="btn btn-primary">' +
			'<span class="glyphicon glyphicon-th-list"></span>' +
			'记录</button>'
	}
}];

function initTable() {
	url = "../../data/realEstate.json";
	$("#table").bootstrapTable({
		url: url,
		columns: columns,
		toolbar: "#toolbar",
		striped: true,
		pagination: true,
		pageList: [5, 15],
		pageSize: 3,
		pageNumber: 1,
		showExport: true,
		exportDataType: "basic",
		buttonsAlign: "right",
		exportTypes: ['excel', 'json'], //导出类型
		exportOptions: {
			fileName: '数据导出', //文件名称设置  
			worksheetName: 'Sheet1', //表格工作区名称  
			tableName: '商品数据表',
			excelstyles: ['background-color', 'color', 'font-size', 'font-weight']
		}

	});
}

function add() {
	clear();
	$("#add").modal();
}

function saveAdd() {
	var index = $('#table').bootstrapTable('getData').length;
	$('#table').bootstrapTable('insertRow', {
		index: index,
		row: {
			number: $('#number').val(), //获取模态框input的值
			name: $('#name').val(),
			city: $('#city').val(),
			unit: $('#unit').val(),
			area: $('#area').val(),
			equity: $('#equity').val()
		}
	});
	$('#add').modal('hide');
}

function instock() {
	/*取出bootstrap选中行的脚标*/
	var index = $("#table").find("tr.danger").data("index");
	var emp = $("#table").bootstrapTable('getData')[index];
	if(emp == null) {
		alert("请选中一行");
		return false;
	} else {
		$('#inName').val(emp.name);

	}
	$('#instock').modal('show');
}

function edit() {
	/*取出bootstrap选中行的脚标*/
	var index = $("#table").find("tr.danger").data("index");
	var emp = $("#table").bootstrapTable('getData')[index];
	if(emp == null) {
		alert("请选中一行");
		return false;
	} else {
		$('#number').val(emp.number);
		$('#name').val(emp.name);
		$('#city').val(emp.city);
		$('#unit').val(emp.unit);
		$('#area').val(emp.area);
	}
	$('#add').modal('show');
}

function initModal() {
	//	<option value="0">男</option>
	//  <option value="1">女</option>
	/*
	 * 针对数组做循环
	 */
	//	$.each(genders, function(i, item) {
	//		/*文本-value*/
	//		var option = new Option(item.desc, item.genderId);
	//		$('#gender').append(option);
	//	})
}

function setSelectorForTable() {
	$("#table").on("click-row.bs.table", function(e, row, ele) {
		/*
		 * 移除之前被点击过的内容
		 * 类选择器
		 */
		$(".danger").removeClass("danger");
		/*
		 * 为当前点击的内容添加样式
		 * 元素选择器
		 */
		$(ele).addClass("danger");
	});
}

function clear() {
	//1.清空所有的输入框
	//2.初始化下拉列表
}

$(document).ready(function() {

	// 只写逻辑步骤	
	init();

})

function init() {

	initTable();

	initModal();

	setSelectorForTable();

}