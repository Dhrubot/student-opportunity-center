import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-user-skill',
  templateUrl: './user-skill.component.html',
  styleUrls: ['./user-skill.component.css'],
})
export class UserSkillComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(public formService: UserService) {
  }

  ngOnInit(): void {
  }

  addSkill(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if (value || '') {
      this.formService.form.controls.skills.value.push(value);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(skill: string): void {
    const index = this.formService.form.controls.skills.value.indexOf(skill);

    if (index >= 0) {
      this.formService.form.controls.skills.value.splice(index, 1);
    }
  }
}
