function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);

	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function redirect() {
	var taskId = getParameterByName("TASKTYPE");
	var workitemId = getParameterByName("WI_ID");
	if (taskId === "TS20000159") { // REQUISITIONS
		window.location.replace(
			"/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=100&sap-language=EN#PurchaseRequisition-approve&/HeaderDetail/WorkflowTaskCollection(SAP__Origin='LOCAL',WorkitemID='" +
			workitemId + "')");
	} else if (taskId === "TS20000166") { // PURCHASE ORDERS
		window.location.replace(
			"/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=100&sap-language=EN#PurchaseOrder-approve&/HeaderDetails/WorkflowTaskCollection(SAP__Origin='LOCAL',WorkitemID='" +
			workitemId + "')");
	} else if (taskId === "TS31000007") { // TIME-SHEETS (cant navigate directly to employee as its not ecoded in url)
		window.location.replace(
			"/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=100&sap-language=EN#TimeEntry-approveTimeEntry"
		);
	} else {
		alert("Workflow Task Id '" + taskId +
			"' is not configured in Z_FIORI_LAUNCH BSP service. Please contact support."
		);
	}
}
