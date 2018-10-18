var columns = [{
		field: "codeVal",
		title: "<span class='glyphicon glyphicon-tags' aria-hidden='true' ></span>编码值",
		halign: "center"
	},
	{
		field: "displayVal",
		title: "显示值",
		halign: "center"
	},
	{
		field: "category",
		title: "所属类别",
		halign: "center"
	},
	{
		field: "note",
		title: "备注",
		halign: "center"
	}
];

$(function() {
	initTable();
});

function initTable() {
	url = "../../data/dictionary.json";
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
		exportDataType: "all",
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