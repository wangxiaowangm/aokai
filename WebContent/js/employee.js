var columns = [{
		field: "empNO",
		title: "<span class='glyphicon glyphicon-tags' aria-hidden='true' ></span>员工编号",
		halign: "center"
	},
	{
		field: "empName",
		title: "姓名",
		halign: "center"
	},
	{
		field: "empDep",
		title: "所在部门",
		halign: "center"
	},
	{
		field: "superior",
		title: "上级",
		halign: "center"
	}
];

function initTable() {
	url = "../../data/employee.json";
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

$(function() {
	initTable();
});