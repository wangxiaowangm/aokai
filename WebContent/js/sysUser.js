var columns = [{
		field: "username",
		title: "<span class='glyphicon glyphicon-tags' aria-hidden='true' ></span>用户名",
		halign: "center"
	},
	{
		field: "permissions",
		title: "权限",
		halign: "center"
	},
	{
		field: "nickname",
		title: "昵称",
		halign: "center"
	},
	{
		field: "creTime",
		title: "创建时间",
		halign: "center"
	}
];

$(function() {
	initTable();
});

function initTable() {
	url = "../../data/sysUser.json";
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