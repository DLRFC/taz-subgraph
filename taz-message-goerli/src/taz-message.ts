import {
  MemberAdded as MemberAddedEvent,
  MessageAdded as MessageAddedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/TazMessage/TazMessage"
import {
  MemberAdded,
  MessageAdded,
  OwnershipTransferred
} from "../generated/schema"

export function handleMemberAdded(event: MemberAddedEvent): void {
  let entity = new MemberAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.groupId = event.params.groupId
  entity.identityCommitment = event.params.identityCommitment
  entity.save()
}

export function handleMessageAdded(event: MessageAddedEvent): void {
  let entity = new MessageAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.parentMessageId = event.params.parentMessageId
  entity.messageId = event.params.messageId
  entity.messageContent = event.params.messageContent
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
