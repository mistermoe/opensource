//*
// API to manage Jetify devcloud Sandbox environments

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file pub/devcloud/v1alpha1/sandbox.proto (package pub.devcloud.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * SandboxState represents the state of a sandbox and maps to workstationspb.Workstation_State
 * in the GCP Workstations API.
 *
 * @generated from enum pub.devcloud.v1alpha1.SandboxState
 */
export enum SandboxState {
  /**
   * Do not use.
   *
   * @generated from enum value: SANDBOX_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The workstation is not yet ready to accept requests from users but will
   * be soon.
   *
   * @generated from enum value: SANDBOX_STATE_STARTING = 1;
   */
  STARTING = 1,

  /**
   * The workstation is ready to accept requests from users.
   *
   * @generated from enum value: SANDBOX_STATE_RUNNING = 2;
   */
  RUNNING = 2,

  /**
   * The workstation is being stopped.
   *
   * @generated from enum value: SANDBOX_STATE_STOPPING = 3;
   */
  STOPPING = 3,

  /**
   * The workstation is stopped and will not be able to receive requests until
   * it is started.
   *
   * @generated from enum value: SANDBOX_STATE_STOPPED = 4;
   */
  STOPPED = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(SandboxState)
proto3.util.setEnumType(SandboxState, "pub.devcloud.v1alpha1.SandboxState", [
  { no: 0, name: "SANDBOX_STATE_UNSPECIFIED" },
  { no: 1, name: "SANDBOX_STATE_STARTING" },
  { no: 2, name: "SANDBOX_STATE_RUNNING" },
  { no: 3, name: "SANDBOX_STATE_STOPPING" },
  { no: 4, name: "SANDBOX_STATE_STOPPED" },
]);

/**
 * @generated from message pub.devcloud.v1alpha1.CreateSandboxRequest
 */
export class CreateSandboxRequest extends Message<CreateSandboxRequest> {
  /**
   * Optional, user provided. Used for billing.
   *
   * @generated from field: string external_billing_tag = 1;
   */
  externalBillingTag = "";

  /**
   * @generated from field: string repo = 2;
   */
  repo = "";

  /**
   * @generated from field: string subdir = 3;
   */
  subdir = "";

  /**
   * @generated from field: string ref = 4;
   */
  ref = "";

  /**
   * @generated from field: map<string, string> environment_variables = 5;
   */
  environmentVariables: { [key: string]: string } = {};

  constructor(data?: PartialMessage<CreateSandboxRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.devcloud.v1alpha1.CreateSandboxRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "external_billing_tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subdir", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ref", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "environment_variables", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSandboxRequest {
    return new CreateSandboxRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSandboxRequest {
    return new CreateSandboxRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSandboxRequest {
    return new CreateSandboxRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSandboxRequest | PlainMessage<CreateSandboxRequest> | undefined, b: CreateSandboxRequest | PlainMessage<CreateSandboxRequest> | undefined): boolean {
    return proto3.util.equals(CreateSandboxRequest, a, b);
  }
}

/**
 * @generated from message pub.devcloud.v1alpha1.CreateSandboxResponse
 */
export class CreateSandboxResponse extends Message<CreateSandboxResponse> {
  /**
   * @generated from field: pub.devcloud.v1alpha1.Sandbox sandbox = 1;
   */
  sandbox?: Sandbox;

  constructor(data?: PartialMessage<CreateSandboxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.devcloud.v1alpha1.CreateSandboxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sandbox", kind: "message", T: Sandbox },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSandboxResponse {
    return new CreateSandboxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSandboxResponse {
    return new CreateSandboxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSandboxResponse {
    return new CreateSandboxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSandboxResponse | PlainMessage<CreateSandboxResponse> | undefined, b: CreateSandboxResponse | PlainMessage<CreateSandboxResponse> | undefined): boolean {
    return proto3.util.equals(CreateSandboxResponse, a, b);
  }
}

/**
 * @generated from message pub.devcloud.v1alpha1.GetSandboxRequest
 */
export class GetSandboxRequest extends Message<GetSandboxRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<GetSandboxRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.devcloud.v1alpha1.GetSandboxRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSandboxRequest {
    return new GetSandboxRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSandboxRequest {
    return new GetSandboxRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSandboxRequest {
    return new GetSandboxRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSandboxRequest | PlainMessage<GetSandboxRequest> | undefined, b: GetSandboxRequest | PlainMessage<GetSandboxRequest> | undefined): boolean {
    return proto3.util.equals(GetSandboxRequest, a, b);
  }
}

/**
 * @generated from message pub.devcloud.v1alpha1.GetSandboxResponse
 */
export class GetSandboxResponse extends Message<GetSandboxResponse> {
  /**
   * @generated from field: pub.devcloud.v1alpha1.Sandbox sandbox = 1;
   */
  sandbox?: Sandbox;

  constructor(data?: PartialMessage<GetSandboxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.devcloud.v1alpha1.GetSandboxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sandbox", kind: "message", T: Sandbox },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSandboxResponse {
    return new GetSandboxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSandboxResponse {
    return new GetSandboxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSandboxResponse {
    return new GetSandboxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetSandboxResponse | PlainMessage<GetSandboxResponse> | undefined, b: GetSandboxResponse | PlainMessage<GetSandboxResponse> | undefined): boolean {
    return proto3.util.equals(GetSandboxResponse, a, b);
  }
}

/**
 * @generated from message pub.devcloud.v1alpha1.Sandbox
 */
export class Sandbox extends Message<Sandbox> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string external_billing_tag = 2;
   */
  externalBillingTag = "";

  /**
   * @generated from field: string repo = 3;
   */
  repo = "";

  /**
   * @generated from field: string subdir = 4;
   */
  subdir = "";

  /**
   * @generated from field: string ref = 5;
   */
  ref = "";

  /**
   * possibly empty while creating
   *
   * @generated from field: string url = 6;
   */
  url = "";

  /**
   * enum
   *
   * @generated from field: pub.devcloud.v1alpha1.SandboxState state = 7;
   */
  state = SandboxState.UNSPECIFIED;

  /**
   * @generated from field: string access_token = 8;
   */
  accessToken = "";

  constructor(data?: PartialMessage<Sandbox>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pub.devcloud.v1alpha1.Sandbox";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "external_billing_tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "repo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subdir", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ref", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "state", kind: "enum", T: proto3.getEnumType(SandboxState) },
    { no: 8, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sandbox {
    return new Sandbox().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sandbox {
    return new Sandbox().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sandbox {
    return new Sandbox().fromJsonString(jsonString, options);
  }

  static equals(a: Sandbox | PlainMessage<Sandbox> | undefined, b: Sandbox | PlainMessage<Sandbox> | undefined): boolean {
    return proto3.util.equals(Sandbox, a, b);
  }
}

