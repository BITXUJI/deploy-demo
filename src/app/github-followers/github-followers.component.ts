import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github.followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, switchMap } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];
  constructor(private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        {
          next: resposne => {
            this.followers = resposne as any[];
          }
        });
  }
};


