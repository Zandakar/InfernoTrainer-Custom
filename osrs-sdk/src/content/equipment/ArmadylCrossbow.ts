"use strict";

import InventImage from "../../assets/images/equipment/Armadyl_crossbow.png";
import { Unit } from "../../sdk/Unit";
import { RangedWeapon } from "../../sdk/weapons/RangedWeapon";
import { AttackBonuses } from "../../sdk/gear/Weapon";
import { ItemName } from "../../sdk/ItemName";
import { AttackStyleTypes, AttackStyle } from "../../sdk/AttackStylesController";
import { Projectile } from "../../sdk/weapons/Projectile";
import { Random } from "../../sdk/Random";

export class ArmadylCrossbow extends RangedWeapon {
  constructor() {
    super();
    this.bonuses = {
      attack: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 0,
        range: 100,
      },
      defence: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 0,
        range: 0,
      },
      other: {
        meleeStrength: 0,
        rangedStrength: 0,
        magicDamage: 0,
        prayer: 1,
      },
      targetSpecific: {
        undead: 0,
        slayer: 0,
      },
    };
  }

  compatibleAmmo(): ItemName[] {
    return [ItemName.DRAGONBOLT_RUBY];
  }

  attackStyles() {
    return [AttackStyle.ACCURATE, AttackStyle.RAPID, AttackStyle.LONGRANGE];
  }

  attackStyleCategory(): AttackStyleTypes {
    return AttackStyleTypes.CROSSBOW;
  }

  defaultStyle(): AttackStyle {
    return AttackStyle.RAPID;
  }

  get weight(): number {
    return 6;
  }

  get itemName(): ItemName {
    return ItemName.ARMADYL_CROSSBOW;
  }

  get isTwoHander(): boolean {
    return false;
  }

  get attackRange() {
    if (this.attackStyle() === AttackStyle.LONGRANGE) {
      return 10;
    }
    return 8;
  }

  get attackSpeed() {
    if (this.attackStyle() === AttackStyle.LONGRANGE) {
      return 6;
    }
    return 5;
  }

  get inventoryImage() {
    return InventImage;
  }

  rollDamage(from: Unit, to: Unit, bonuses: AttackBonuses) {
    if (
      from.equipment.ammo &&
      from.equipment.ammo.itemName === ItemName.DRAGONBOLT_RUBY &&
      Random.get() < 0.066 &&
      from.currentStats.hitpoint - Math.floor(from.currentStats.hitpoint * 0.1) > 0
    ) {
      this.damage = to.currentStats.hitpoint * 0.2;
      from.addProjectile(
        new Projectile(this, Math.floor(from.currentStats.hitpoint * 0.1), from, from, "rubyboltspec", {
          reduceDelay: 15,
        }),
      );
    } else if (
      from.equipment.ammo &&
      from.equipment.ammo.itemName === ItemName.DRAGONBOLT_DIAMOND &&
      Random.get() < 0.11
    ) {
      this.damage = this._calculateHitDamage(from, to, bonuses);
    } else if (from.equipment.ammo) {
      super.rollDamage(from, to, bonuses);
    } else {
      this.damage = -1;
    }
  }
}
