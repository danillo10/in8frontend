import { Component } from '@angular/core';

import { CadastroInterface } from './interfaces/cadastro';
import { CadastroService } from './services/cadastro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in8frontend';
  cadastro = {} as CadastroInterface;
  cadastros: Array<CadastroInterface> = [];
  loading: boolean = false;

  constructor(public cadastroService: CadastroService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.cadastroService.getAll()
    .subscribe((data: Array<CadastroInterface>)=>{
      this.cadastros = data;
    })
  }

  create(){

    if(!this.cadastro.nome){
      return alert("Campo nome obrigatório");
    }

    if(!this.cadastro.email){
      return alert("Campo e-mail obrigatório");
    }

    if(!this.cadastro.data_nascimento){
      return alert("Campo data de nascimento obrigatório");
    }

    if(!this.cadastro.telefone){
      return alert("Campo telefone obrigatório");
    }

    this.loading = true;

    this.cadastroService.create(this.cadastro)
    .subscribe((data: any)=>{
      this.loading = false;
      if(data.status == 1) return alert(data.mensagem);
      this.cadastros.push(data);
    },
    (error)=>{
      this.loading = false;
      console.log(error);
      alert("Erro na requisição, tente novamente!");
    })
  }

}
