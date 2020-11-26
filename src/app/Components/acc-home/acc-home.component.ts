import { Component, OnInit, AfterViewInit, SimpleChanges } from "@angular/core";
import * as j from "jquery";
import {
  ActivatedRoute,
  Router,
} from "@angular/router";
@Component({
  selector: "app-acc-home",
  templateUrl: "./acc-home.component.html",
  styleUrls: ["./acc-home.component.css"],
})
export class AccHomeComponent implements OnInit, AfterViewInit {
  userURL: {id: string, username: string};
  username: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    console.log(this.route.snapshot.params.id);
    
    
  }


  ngOnInit() {
    this.changeTabs();
    this.userURL = {
      id: this.route.snapshot.params['id'],
      username: this.route.snapshot.params['username']
    }
    this.username = this.userURL.username;
  }

  ngAfterViewInit() {
    this.changeTabs();
  }




  changeTabs() {
    j().ready(() => {
      // =============================           Tab button trigger
      // ----------------  Click event for tabs (Desktop)
      j(".tab-links > .tab").click(
        // Function for desktop tabs
        function tabs() {
          const tabId = j(this).attr("data-tab");
          j(".tab-links > .tab").removeClass("current");
          j(".tab-content").removeClass("current");
          j(this).addClass("current");
          j("#" + tabId).addClass("current");
        }
      );
      // ----------------  Click event for tabs (Mobile)
      j(".tabs-mobile > .tab").click(
        // Function for mobile tabs
        function tabsMobile() {
          const tabId = j(this).attr("data-tab");
          j(".tabs-mobile > .tab").removeClass("current");
          j(".tab-content").removeClass("current");
          j(this).addClass("current");
          j("#" + tabId).addClass("current");
        }
      );
      // ============================            Tab mobile
      (() => {
        const winIsSmall = j(window).width() <= 768;
        if (winIsSmall) {
          j(".tabs-mobile").show();
          j(".tab-links").hide();
        } else {
          j(".tab-links").show();
          j(".tabs-mobile").hide();
        }
      })();
      j(window).resize(() => {
        const winIsSmall = j(window).width() <= 768;
        if (winIsSmall) {
          j(".tab-links").hide();
          j(".tabs-mobile").show();
        } else {
          j(".tab-links").show();
          j(".tabs-mobile").hide();
        }
      });
    });
  }


}
