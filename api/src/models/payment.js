import { v4 as uuid } from 'uuid';

class Payment {
  constructor() {
    this.state = [
      {
        "uuid": "8722073f-6520-44b7-a6ab-f04de644324d",
        "applicationUuid": "01b35179-134c-4bb1-af36-a9663c009fcd",
        "paymentMethod": "ACH",
        "paymentAmount": 44798
      },
      {
        "uuid": "48b998a4-07ea-40ce-bd83-c75832fe2dce",
        "applicationUuid": "023be91c-2f95-41f2-9c3c-2e871450b653",
        "paymentMethod": "ACH",
        "paymentAmount": 40058
      },
      {
        "uuid": "630890b2-3ca0-46a2-b4a3-3da1cb5ed76b",
        "applicationUuid": "028248b4-eb6e-4e75-8a0d-7f4eba7488c6",
        "paymentMethod": "ACH",
        "paymentAmount": 25551
      },
      {
        "uuid": "79b12375-839c-4418-8304-e48b7dacdf1f",
        "applicationUuid": "02ba4b80-88ff-40f1-9c74-34f52c931ba3",
        "paymentMethod": "ACH",
        "paymentAmount": 25233
      },
      {
        "uuid": "e4068685-69bf-44c3-97e9-7364ed1b51a7",
        "applicationUuid": "05993010-da7c-45da-9654-239c403921dc",
        "paymentMethod": "ACH",
        "paymentAmount": 42182
      },
      {
        "uuid": "fce40e75-72f8-47f3-9a1c-ff745da9dfb5",
        "applicationUuid": "05b5b034-b001-459a-94b6-a899f9ab08a5",
        "paymentMethod": "ACH",
        "paymentAmount": 40110
      },
      {
        "uuid": "ae2b020d-d8b7-409d-988a-38c136945986",
        "applicationUuid": "05b86e6a-f751-48ff-9a34-2240c96fa7a8",
        "paymentMethod": "ACH",
        "paymentAmount": 47717
      },
      {
        "uuid": "61494ceb-cad6-41a8-b4a2-4a44d2740e07",
        "applicationUuid": "06c4f45c-781e-473f-88eb-99726e6bf60b",
        "paymentMethod": "ACH",
        "paymentAmount": 46469
      },
      {
        "uuid": "3fe48d9b-1443-4be3-9151-3e538ccb8619",
        "applicationUuid": "0722e839-0dcc-4fd8-bfed-6306e4e1e37c",
        "paymentMethod": "ACH",
        "paymentAmount": 48398
      },
      {
        "uuid": "46fb9c6f-0150-404c-aa82-3106bd11744c",
        "applicationUuid": "09915c18-bea0-44fd-8689-b135c4b6b013",
        "paymentMethod": "ACH",
        "paymentAmount": 25470
      },
      {
        "uuid": "021cfd19-b80d-4bb7-bc85-d64683da92ef",
        "applicationUuid": "0beff8b5-8880-41dc-9445-5e3b57bf1d96",
        "paymentMethod": "ACH",
        "paymentAmount": 47090
      },
      {
        "uuid": "abfc1807-1be8-45dd-9574-df422c439cb4",
        "applicationUuid": "0edc3823-4723-4815-97c5-d9cc3e6ce345",
        "paymentMethod": "ACH",
        "paymentAmount": 41485
      },
      {
        "uuid": "773829fd-30d1-4d49-9ce7-0f34a980a9b1",
        "applicationUuid": "0ef56055-0927-4b66-8f70-4cab58e4546e",
        "paymentMethod": "ACH",
        "paymentAmount": 35249
      },
      {
        "uuid": "fc470ed7-6388-46dd-807f-c743d2bbf4de",
        "applicationUuid": "0f18a759-da95-4580-b24f-e71b7b12349d",
        "paymentMethod": "ACH",
        "paymentAmount": 40519
      },
      {
        "uuid": "e1d10695-e8e4-4f45-b409-332b8ec43467",
        "applicationUuid": "1005c152-ca3e-4436-9c7f-5a415704d43f",
        "paymentMethod": "ACH",
        "paymentAmount": 37063
      },
      {
        "uuid": "4f16d646-a22a-4915-8282-84df3a296fa9",
        "applicationUuid": "104ec1ff-3fb1-444d-9769-ae573b1c55f5",
        "paymentMethod": "ACH",
        "paymentAmount": 35160
      },
      {
        "uuid": "9803a3b2-65c3-4172-9e2e-b818a560b325",
        "applicationUuid": "1077a1f8-34e5-4c03-86d2-0df8d99be178",
        "paymentMethod": "ACH",
        "paymentAmount": 35667
      },
      {
        "uuid": "a612ba91-fe01-45fc-a45c-09681a220de5",
        "applicationUuid": "10f1a015-9eeb-483f-b688-849b4c3494bc",
        "paymentMethod": "ACH",
        "paymentAmount": 45060
      },
      {
        "uuid": "a756fbd3-4c55-42df-929d-1475bcccd274",
        "applicationUuid": "1243375d-6b36-4ef8-981d-5790636f8574",
        "paymentMethod": "ACH",
        "paymentAmount": 48317
      },
      {
        "uuid": "b8ba6080-88b7-4e3c-a75d-3137c824b03f",
        "applicationUuid": "153a8e73-2d06-40a2-a5e9-2926eb4abdcd",
        "paymentMethod": "ACH",
        "paymentAmount": 46407
      },
      {
        "uuid": "ceeb61de-9c74-4243-9bc8-9368e2842763",
        "applicationUuid": "1681965c-34d0-4901-ab87-6e328aa8211c",
        "paymentMethod": "ACH",
        "paymentAmount": 46558
      },
      {
        "uuid": "6db138de-5a3c-4232-9c4f-46c3883e0ead",
        "applicationUuid": "16c7cb55-fc36-44f8-a7dc-d9c76ab2b328",
        "paymentMethod": "ACH",
        "paymentAmount": 35673
      },
      {
        "uuid": "9910a42c-1100-4439-b0a2-5fa9d483408c",
        "applicationUuid": "17d6244f-c62f-40d2-9cd3-0339cca8e9d6",
        "paymentMethod": "ACH",
        "paymentAmount": 42190
      },
      {
        "uuid": "72da986c-e40e-4459-a9c5-1ade8010e210",
        "applicationUuid": "7b4bfc85-5955-4b92-88b3-7ddd423c56d8",
        "paymentMethod": "ACH",
        "paymentAmount": 49270
      },
      {
        "uuid": "a3194ecd-95f4-453c-922c-e4592a9e3da2",
        "applicationUuid": "7b949e0c-295d-45c7-b392-6c6f56feec76",
        "paymentMethod": "ACH",
        "paymentAmount": 34607
      },
      {
        "uuid": "d7d261fb-d9de-4605-b6e4-4ad446f8be99",
        "applicationUuid": "7c9486d8-7afa-47de-afb6-79f3586e17b8",
        "paymentMethod": "ACH",
        "paymentAmount": 39977
      },
      {
        "uuid": "5635caf4-121a-4cbf-9ace-b5f4ce3766ae",
        "applicationUuid": "7d6c72f7-c865-4ede-9391-632d6e519d96",
        "paymentMethod": "ACH",
        "paymentAmount": 39201
      },
      {
        "uuid": "f7fc4977-8976-4042-a578-041104f668c9",
        "applicationUuid": "7db92fc0-5101-4611-a684-5a5745c84cc3",
        "paymentMethod": "ACH",
        "paymentAmount": 35943
      },
      {
        "uuid": "01ff35d9-c68d-4a97-9ec4-0bc030d1be04",
        "applicationUuid": "7eb1669f-c851-47ff-af49-236b25f1b6d4",
        "paymentMethod": "ACH",
        "paymentAmount": 43440
      },
      {
        "uuid": "ca9debbd-44bb-4aac-b85d-f697da637f1f",
        "applicationUuid": "7f5cdd2b-e7b2-48ec-86e1-1651f132c74a",
        "paymentMethod": "ACH",
        "paymentAmount": 39686
      },
      {
        "uuid": "ae9836f6-7cc6-4751-b605-e6bd1433b4cb",
        "applicationUuid": "83aef682-3d9e-4d67-b024-e205011c2b79",
        "paymentMethod": "ACH",
        "paymentAmount": 37784
      },
      {
        "uuid": "d084844b-bc43-4554-88b1-5efa924bd522",
        "applicationUuid": "8541f098-089c-456f-ba99-39d74cd8b257",
        "paymentMethod": "ACH",
        "paymentAmount": 47787
      },
      {
        "uuid": "e399cf77-e099-4797-b323-77079736f106",
        "applicationUuid": "858901f1-f1d4-4bae-84d0-0dfe5fda622f",
        "paymentMethod": "ACH",
        "paymentAmount": 25174
      },
      {
        "uuid": "51d1b366-5cc3-46c2-8880-c40195ebf9a9",
        "applicationUuid": "866d6e16-899e-4568-9f67-a459c25447ac",
        "paymentMethod": "ACH",
        "paymentAmount": 31603
      },
      {
        "uuid": "e9d0ace4-7cb4-440a-86c9-bacf95b6f080",
        "applicationUuid": "88b8e5e8-650d-405d-a52b-d4e0a665819e",
        "paymentMethod": "ACH",
        "paymentAmount": 31578
      },
      {
        "uuid": "d5af7279-7877-4f66-9a95-3d5d0d624639",
        "applicationUuid": "8952a8d1-979e-4bae-8bab-f93c5bc3e9ce",
        "paymentMethod": "ACH",
        "paymentAmount": 44959
      },
      {
        "uuid": "30ce4aaf-66a1-4baa-9b5c-e08510a13e77",
        "applicationUuid": "89b17aa1-3d85-4ebc-9c0f-1c1591ee6369",
        "paymentMethod": "ACH",
        "paymentAmount": 43011
      },
      {
        "uuid": "a16ecbc9-6674-4c04-807a-8b1685fcc931",
        "applicationUuid": "89e5585e-a868-4dab-8b6b-8341376665f4",
        "paymentMethod": "ACH",
        "paymentAmount": 46213
      },
      {
        "uuid": "0c313d15-cae0-42b2-a513-aa593140adee",
        "applicationUuid": "89eac820-f0a8-4efd-9eb1-f58222555efa",
        "paymentMethod": "ACH",
        "paymentAmount": 43356
      },
      {
        "uuid": "91914e6e-a2a3-4d3d-8704-1155215c5c2c",
        "applicationUuid": "8b021d00-6bb4-4091-90b2-45200fa1b26e",
        "paymentMethod": "ACH",
        "paymentAmount": 43842
      },
      {
        "uuid": "3af8e055-d9bc-491c-86af-a5cce0a1348e",
        "applicationUuid": "8b2e920b-c8ce-43da-a443-4c30fe0fb3d1",
        "paymentMethod": "ACH",
        "paymentAmount": 39916
      },
      {
        "uuid": "1515024c-fd6e-4409-a317-c264526d646b",
        "applicationUuid": "8c2dacc2-e792-444a-9d5b-d9458ece2686",
        "paymentMethod": "ACH",
        "paymentAmount": 37844
      },
      {
        "uuid": "b4bb82f4-1aa9-455e-9a77-a2ef8cabb26a",
        "applicationUuid": "8c51e5de-b2c7-4b29-a3c0-936104fb29aa",
        "paymentMethod": "ACH",
        "paymentAmount": 27748
      },
      {
        "uuid": "5d0e50bd-c6b8-4222-b6f9-338936abd67e",
        "applicationUuid": "8dd4e3ff-2717-4320-be91-bf56dfd718a8",
        "paymentMethod": "ACH",
        "paymentAmount": 31692
      },
      {
        "uuid": "be47f853-aa89-4165-8eae-923cff0ab8ed",
        "applicationUuid": "8e264138-f4b7-4848-8c62-6121c97e46c1",
        "paymentMethod": "ACH",
        "paymentAmount": 39679
      },
      {
        "uuid": "a45ec17f-e166-4e67-9e76-f00ef8e15601",
        "applicationUuid": "8e5c3344-a465-4c74-85a1-2b1da78208fd",
        "paymentMethod": "ACH",
        "paymentAmount": 31517
      },
      {
        "uuid": "9271435c-bb1b-46f2-87cb-567083e0e7f3",
        "applicationUuid": "8f556211-c867-4308-bb6c-a2f55ed991b6",
        "paymentMethod": "ACH",
        "paymentAmount": 43821
      },
      {
        "uuid": "1a176b88-b1a6-4029-9482-a345e8a03fdc",
        "applicationUuid": "8f67ca05-4031-459e-99e9-bac77beb5213",
        "paymentMethod": "ACH",
        "paymentAmount": 46469
      },
      {
        "uuid": "6d8ef433-9843-467c-a915-ca5f037316a7",
        "applicationUuid": "8fae8e1c-a071-45af-bad3-8ab59782ecd8",
        "paymentMethod": "ACH",
        "paymentAmount": 29415
      },
      {
        "uuid": "ea672f9d-96a6-453e-b1c3-e2f298e3cb9a",
        "applicationUuid": "9038510c-d903-41b2-8255-515f197ae4bc",
        "paymentMethod": "ACH",
        "paymentAmount": 28625
      },
      {
        "uuid": "a881e0b0-de1a-46bd-a572-03377e93cd9d",
        "applicationUuid": "903f2fbd-7abe-4f89-93c9-137c27570766",
        "paymentMethod": "ACH",
        "paymentAmount": 48931
      },
      {
        "uuid": "0a294128-ebde-4143-bd2d-513849bfd860",
        "applicationUuid": "90adae99-e966-44b7-92b5-66ec488a9555",
        "paymentMethod": "ACH",
        "paymentAmount": 46137
      },
      {
        "uuid": "305feb14-3594-48e0-8eca-2d2a38b0776a",
        "applicationUuid": "93f479bc-1f99-4844-84e0-b4a33d0fbe93",
        "paymentMethod": "ACH",
        "paymentAmount": 37123
      },
      {
        "uuid": "23c5780c-de87-4d85-92b7-8ae7f5372ac5",
        "applicationUuid": "94025181-e095-48d0-860e-43eae553f7b6",
        "paymentMethod": "ACH",
        "paymentAmount": 33170
      },
      {
        "uuid": "7280a47d-bd87-4cce-953a-6a8b56cd85cf",
        "applicationUuid": "97b6c3fb-8368-4a27-8619-a75258355dc5",
        "paymentMethod": "ACH",
        "paymentAmount": 49808
      },
      {
        "uuid": "f4f0bd3b-6227-460e-88a5-0649ec7ac773",
        "applicationUuid": "97e5707e-e54a-48fc-941e-8d3499efd1fc",
        "paymentMethod": "ACH",
        "paymentAmount": 33913
      },
      {
        "uuid": "97cf29b0-bd3b-4453-9f7b-aeb85c071851",
        "applicationUuid": "97edb691-9f09-47f5-b0b5-dd626d97ca8b",
        "paymentMethod": "ACH",
        "paymentAmount": 31975
      },
      {
        "uuid": "6f8e283a-2cdd-4e87-a5c3-d7c06b83ee6e",
        "applicationUuid": "98e01d54-e5b9-4746-8169-fa88f6ca72ba",
        "paymentMethod": "ACH",
        "paymentAmount": 41918
      },
      {
        "uuid": "955658f1-a8e7-443e-ac0d-8623feada95e",
        "applicationUuid": "9abaea63-8b8f-43e0-9898-92344622e0fe",
        "paymentMethod": "ACH",
        "paymentAmount": 39751
      },
      {
        "uuid": "f4d91f42-093d-4dfa-b50f-cb3ed40ca726",
        "applicationUuid": "9dad37ed-18ec-40ab-adec-2b7f906ba09b",
        "paymentMethod": "ACH",
        "paymentAmount": 30768
      },
      {
        "uuid": "7705536b-f2d6-46ff-82b3-41436c3072c1",
        "applicationUuid": "a1106831-5cd6-4e5f-adc0-8856b817ff9f",
        "paymentMethod": "ACH",
        "paymentAmount": 47942
      },
      {
        "uuid": "e1df3a67-2c8b-4eec-83db-0ec45f923e90",
        "applicationUuid": "a1ba22f4-286e-4015-b51f-7bc54eb78580",
        "paymentMethod": "ACH",
        "paymentAmount": 39038
      },
      {
        "uuid": "983504ee-992a-44f4-8e52-feea5ecd6733",
        "applicationUuid": "a1e03fcd-e488-4fde-a71a-56a97514e77c",
        "paymentMethod": "ACH",
        "paymentAmount": 30476
      },
      {
        "uuid": "ece44198-63ab-4f9d-b139-764f1e35db08",
        "applicationUuid": "a2752c8f-a44c-4e93-ab07-08235dccd95a",
        "paymentMethod": "ACH",
        "paymentAmount": 26915
      },
      {
        "uuid": "2355cc32-ef63-4370-87b0-b0aa6fa497bb",
        "applicationUuid": "a2dc128d-a5d6-4274-b523-3cd07916c777",
        "paymentMethod": "ACH",
        "paymentAmount": 44184
      },
      {
        "uuid": "57e3c51b-8c1f-467b-9e47-816c54a10bab",
        "applicationUuid": "a3847f00-d102-4528-bc3d-74b41486b023",
        "paymentMethod": "ACH",
        "paymentAmount": 26224
      },
      {
        "uuid": "fce86462-7138-4322-97bf-7c9f7d693973",
        "applicationUuid": "a4a6a1e2-6df0-492a-8abb-072d6a8e63d8",
        "paymentMethod": "ACH",
        "paymentAmount": 45211
      }
    ];
  }
  getAll() {
    return this.state;
  }
  getById(uuid) {
    return this.state.find((item) => item.uuid === uuid);
  }
  create({ paymentAmount, applicationUuid }) {
    const record = {
      uuid: uuid(),
      paymentMethod: "ACH",
      applicationUuid: applicationUuid,
      paymentAmount: paymentAmount
    };
    this.state.push(record);
    return record;
  }
}

export default Payment;