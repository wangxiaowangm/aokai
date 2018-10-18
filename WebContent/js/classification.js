var columns = [{
		field: "codeVal",
		title: "<span class='glyphicon glyphicon-tags' aria-hidden='true' ></span>分类编码",
		halign: "center"
	},
	{
		field: "name",
		title: "分类名称",
		halign: "center"
	},
	{
		field: "superior",
		title: "上级分类",
		halign: "center"
	},
	{
		field: "note",
		title: "备注信息",
		halign: "center"
	}
];

$(function() {
	initTable();
});

function search() {
	$('#table tr').css('display', 'none');
	var length = $('#table').bootstrapTable('getData').length;

	for(var i = 0; i < length; i++) {
		var emp = $("#table").bootstrapTable('getData')[i];
		if($('#seSuperior option[checked = "checked"]').text() == emp.superior) {
			$('#table tr:eq[i]').css('display', 'block');
		}
	}

}

function initTable() {
	url = "../../data/classification.json";
	$("#table").bootstrapTable({
		url: url,
		moethod: 'get',
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