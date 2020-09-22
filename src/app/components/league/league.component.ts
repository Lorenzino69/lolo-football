import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';
import {LeagueService} from '../../services/league.service';
export interface LeagueItem {
  d: number,
  dd: number,
  fa1: number,
  fa2: number,
  grp: number,
  l: number,
  p: number,
  pnt: number,
  row: number,
  team: string,
  teamId: string,
  teamScId: string,
  teamSlug: string,
  w:number
}
const EXAMPLE_DATA: LeagueItem[] = [
  {row: 1, team: 'Hydrogen', d: 1 ,dd: 1, fa1: 1, fa2: 1, grp: 1,l:1,p:1,pnt:1,teamId:'test',teamScId: 'test',teamSlug:'test',w:3},
  {row: 2, team: 'lyon', d: 1 ,dd: 1, fa1: 1, fa2: 1, grp: 1,l:1,p:1,pnt:1,teamId:'test',teamScId: 'test',teamSlug:'test',w:3}
];

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})



export class LeagueComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<LeagueItem>;
  @Input() public model: any;


  // dataSource = new MatTableDataSource(EXAMPLE_DATA);


  constructor (private route: ActivatedRoute,private leagueService: LeagueService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','team','J','V','N','D','Points'];
  public data: any;
  private i: number;
  public dataSource: MatTableDataSource<LeagueItem>;



  ngOnInit() {


   const route =  this.route.params.subscribe((params) => {
      const id = params['id'];
      const league = this.leagueService.getLigue(id).subscribe(
        res => {
          this.data = res.response.standings.rows;
          console.log(res.response)
          this.dataSource = new MatTableDataSource<LeagueItem>(this.data);
        }, () => {
          console.log("erreur d'appel a league service");
        },
        () => { if (league) { league.unsubscribe() } });
    },
     () => { if (route) { route.unsubscribe() } });
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }


}
