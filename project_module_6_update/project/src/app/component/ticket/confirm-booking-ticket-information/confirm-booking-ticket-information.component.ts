import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Ticket} from "../../../model/Ticket";
import {ConfirmBookingTicketService} from "../../service/confirm-booking-ticket.service";

@Component({
  selector: 'app-confirm-booking-ticket-information',
  templateUrl: './confirm-booking-ticket-information.component.html',
  styleUrls: ['./confirm-booking-ticket-information.component.css']
})
export class ConfirmBookingTicketInformationComponent implements OnInit {

  ticket!: Ticket;

  constructor(protected activatedRoute: ActivatedRoute,
              private confirmBookingService: ConfirmBookingTicketService) {
  }

  ngOnInit(): void {
    let btnConfirm = document.getElementById('confirm');
    let titleBooking = document.getElementById('accountBooking');
    let noteConfirm = document.getElementById('note');

    // @ts-ignore
    btnConfirm.addEventListener('click', () => {
      // @ts-ignore
      titleBooking.innerText = 'Thông tin tài khoản đặt vé';
      // @ts-ignore
      noteConfirm.innerHTML = '<i>Vui lòng đến lấy vé trước thời gian chiếu phim 30 phút. Sau thời gian đó vé sẽ tự động hủy !</li>';
      // @ts-ignore
      btnConfirm.innerHTML = '<button style="width: 180px; height: 45px; font-size: 12px" title=\'How PayPal Works\'\n onclick="javascript:window.open(\'https://www.sandbox.paypal.com/checkoutnow?sessionID=uid_39c7fa19b8_mdi6mzg6mti&buttonSessionID=uid_a35ed17b5a_mdi6ntg6mdm&stickinessID=uid_1b80682fbd_mtq6mdu6mdk&inlinexo=false&smokeHash=&fundingSource=paypal&buyerCountry=VN&locale.x=vi_VN&commit=true&enableFunding.0=venmo&clientID=AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R&env=sandbox&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9c2ImZW5hYmxlLWZ1bmRpbmc9dmVubW8mY3VycmVuY3k9VVNEIiwiYXR0cnMiOnsiZGF0YS1zZGstaW50ZWdyYXRpb24tc291cmNlIjoiYnV0dG9uLWZhY3RvcnkiLCJkYXRhLXVpZCI6InVpZF96aHV1bGxtaWxmaXVtY3djamhsZHpyb215bW91eHIifX0&xcomponent=1&version=5.0.338&token=0FL54204C7273014U\',\'WIPaypal\',\'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700\'); return false;"\n' +
        'class="button btnGreen">Thanh toán\n </button>';
    })

    const id = Number(this.activatedRoute.snapshot.params['TicketId']);
    this.confirmBookingService.getTicketById(id).subscribe(value => {
      this.ticket = value;
    });
  }


}
