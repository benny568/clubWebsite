import { Component, ViewChild } from '@angular/core';
import { Router }               from '@angular/router';
import { MODAL_DIRECTIVES }     from 'ng2-bs3-modal/ng2-bs3-modal';
import { ModalComponent }       from 'ng2-bs3-modal/ng2-bs3-modal';
import { SessionDataService }   from '../services/session-data.service';
import { ToolBox }              from '../utilities/toolbox';
import { Member }               from '../dao/member';

@Component({
	templateUrl: `
					<modal #modal>
					    <modal-header [show-close]="true">
					        <h4 class="modal-title">I'm a modal!</h4>
					    </modal-header>
					    <modal-body>
					        Hello World!
					    </modal-body>
					    <modal-footer [show-default-buttons]="true"></modal-footer>
					</modal>  
                 `,
	directives: [MODAL_DIRECTIVES]
})

export class EditMemberComponent
{
	@ViewChild('modal')
    modal: ModalComponent;
	
	constructor( private _dataService: SessionDataService, private _router: Router, private tb$: ToolBox ) 
	{
//		this.modal = new ModalComponent();
	}
	
	ngAfterViewInit()
	{
		this.modal.open();
	}

    close() {
        this.modal.close();
    }

}