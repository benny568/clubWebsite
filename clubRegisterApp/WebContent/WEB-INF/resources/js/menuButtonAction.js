		$(document).ready(function(){
			
			$('#academyHome').click(function(){
				window.location = 'AcademyHome';
			});
			
			$('.addCodeReviewDefectButton').click(function(){
				var id = $(this).attr('recId');
				window.location = "addRecord.html?id=" + id + "&recordType=CodeReviewDefect";
			});
		})