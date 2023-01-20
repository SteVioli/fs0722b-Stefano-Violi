import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http'


@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorInterceptor,
            multi: true
        }
    ]
})
export class AuthModule { }
