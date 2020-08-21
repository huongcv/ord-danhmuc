import { OnInit } from '@angular/core';
import { DanhMucService } from '../services/danh-muc.service';
export declare class DanhMucComponent implements OnInit {
    private service;
    constructor(service: DanhMucService);
    ngOnInit(): void;
}
