var columns = [{
	checkbox: true
}, {
	field: "name",
	title: "资产名称",
	halign: "center"
}, {
	field: "number",
	title: "批次编号",
	halign: "center"
}, {
	field: 'price',
	title: '单价（¥）',
	halign: "center"
}, {
	field: 'inventory',
	title: '当前库存量',
	halign: "center"
}, {
	field: 'procurement',
	title: '采购人',
	halign: "center",

}, {
	field: 'inboundDate',
	title: '入库日期',
	halign: "center"
}, {
	title: '领用操作',
	halign: "center",
	formatter: function(value, row, index) {
		return '<button class="btn btn-primary" onclick="getSelectedItem()" >' +
			'<span class="glyphicon glyphicon-edit"></span>' +
			'领用</button>'
	}
}];

function initTable() {
	url = "../../data/car-recipients.json";
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

function getSelectedItem() {
	/*取出bootstrap选中行的脚标*/
	var index = $("#table").find("tr.danger").data("index");
	var emp = $("#table").bootstrapTable('getData')[index];
	if(emp == null) {
		alert("请选中一行");
		return false;
	} else {
		$('#name').val(emp.name);
		$('#price').val(emp.price);
		/*
         * $('input[name="gender"]')返回一个数组
         * 女<input type="radio" value="0" name="gender" checked="checked" /> 男
		  <input type="radio" value="1" name="gender" />
         */

	}
	$('#recipients').modal('show');
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

var procurement = [{
	procurementId: 0,
	desc: '田武圣'
}, {
	procurementId: 1,
	desc: '刘青'
}];

function initModal() {
	//	<option value="0">男</option>
	//  <option value="1">女</option>
	/*
	 * 针对数组做循环
	 */
	$.each(procurement, function(i, item) {
		/*文本-value*/
		var option = new Option(item.desc, item.procurementId);
		$('#procurement').append(option);
	})
}

$(function() {
	initTable();
	setSelectorForTable();
	initModal();
});