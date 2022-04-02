$(document).ready(function () {
	var $Language 	= $('#Language');
	var $Company 	= $('#Company');
	var $Name 	 	= $('#Name');
	var $Position 	= $('#Position');
	var $Department = $('#Department');
	var $Address	= $('#Address');

	const departIcon = `<i class="fa-solid fa-building fa-xl"></i>`;

	const enObj 	= {
		"Company": 	"Bank of Taiwan<br/>Co., Ltd.",
		"Name": 	"Zong-Xi Wei",
		"Position": "Office Clerk",
		"Depart": 	"&nbsp;Information Department", 
		"Address": 	"No. 208, Sec. 2, Chengde Rd., Datong Dist., Taipei City 103, Taiwan (R.O.C.) "
	};

	const chObj		= {
		"Company": 	"臺灣銀行股份有限公司",
		"Name": 	"魏宗熙", 
		"Position": "初級辦事員",
		"Depart": 	"資訊處", 
		"Address": 	"103臺北市大同區承德路二段208號"
	};

	// Change Language function
	var changeLanguage = function () {
		var $this = $(this);
		$this.prop('checked') ? english() : chinese();	
	};

	// In English 
	var english = function () {
		$Company.html(enObj.Company);
		$Name.text(enObj.Name);
		$Position.text(enObj.Position);
		$Department.html(departIcon.replace('fa-xl', '') + enObj.Depart);
		$Department.css({
			letterSpacing: '0px',
			fontSize: '1.1rem'
		});
		$Address.text(enObj.Address);
		$Address.css('letter-spacing', '0px');
	};

	// In chinese 
	var chinese = function () {
		$Company.text(chObj.Company);
		$Name.text(chObj.Name);
		$Position.text(chObj.Position);
		$Department.html(departIcon + chObj.Depart);
		$Department.css({
			letterSpacing: '',
			fontSize: ''
		});
		$Address.text(chObj.Address);
		$Address.css('letter-spacing', '');	
	};

	$Language.on('click', changeLanguage);
});