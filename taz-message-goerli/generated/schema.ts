// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MemberAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MemberAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MemberAdded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MemberAdded", id.toString(), this);
    }
  }

  static load(id: string): MemberAdded | null {
    return changetype<MemberAdded | null>(store.get("MemberAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    return value!.toBigInt();
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get identityCommitment(): BigInt {
    let value = this.get("identityCommitment");
    return value!.toBigInt();
  }

  set identityCommitment(value: BigInt) {
    this.set("identityCommitment", Value.fromBigInt(value));
  }
}

export class MessageAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MessageAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MessageAdded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MessageAdded", id.toString(), this);
    }
  }

  static load(id: string): MessageAdded | null {
    return changetype<MessageAdded | null>(store.get("MessageAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get parentMessageId(): string {
    let value = this.get("parentMessageId");
    return value!.toString();
  }

  set parentMessageId(value: string) {
    this.set("parentMessageId", Value.fromString(value));
  }

  get messageId(): string {
    let value = this.get("messageId");
    return value!.toString();
  }

  set messageId(value: string) {
    this.set("messageId", Value.fromString(value));
  }

  get messageContent(): string {
    let value = this.get("messageContent");
    return value!.toString();
  }

  set messageContent(value: string) {
    this.set("messageContent", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OwnershipTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): OwnershipTransferred | null {
    return changetype<OwnershipTransferred | null>(
      store.get("OwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value!.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value!.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}