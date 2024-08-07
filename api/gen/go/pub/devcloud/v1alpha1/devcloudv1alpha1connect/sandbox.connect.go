//*
// API to manage Jetify devcloud Sandbox environments

// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: pub/devcloud/v1alpha1/sandbox.proto

package devcloudv1alpha1connect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	v1alpha1 "go.jetpack.io/axiom/api/gen/pub/devcloud/v1alpha1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// SandboxServiceName is the fully-qualified name of the SandboxService service.
	SandboxServiceName = "pub.devcloud.v1alpha1.SandboxService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// SandboxServiceCreateSandboxProcedure is the fully-qualified name of the SandboxService's
	// CreateSandbox RPC.
	SandboxServiceCreateSandboxProcedure = "/pub.devcloud.v1alpha1.SandboxService/CreateSandbox"
	// SandboxServiceGetSandboxProcedure is the fully-qualified name of the SandboxService's GetSandbox
	// RPC.
	SandboxServiceGetSandboxProcedure = "/pub.devcloud.v1alpha1.SandboxService/GetSandbox"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	sandboxServiceServiceDescriptor             = v1alpha1.File_pub_devcloud_v1alpha1_sandbox_proto.Services().ByName("SandboxService")
	sandboxServiceCreateSandboxMethodDescriptor = sandboxServiceServiceDescriptor.Methods().ByName("CreateSandbox")
	sandboxServiceGetSandboxMethodDescriptor    = sandboxServiceServiceDescriptor.Methods().ByName("GetSandbox")
)

// SandboxServiceClient is a client for the pub.devcloud.v1alpha1.SandboxService service.
type SandboxServiceClient interface {
	CreateSandbox(context.Context, *connect.Request[v1alpha1.CreateSandboxRequest]) (*connect.Response[v1alpha1.CreateSandboxResponse], error)
	GetSandbox(context.Context, *connect.Request[v1alpha1.GetSandboxRequest]) (*connect.Response[v1alpha1.GetSandboxResponse], error)
}

// NewSandboxServiceClient constructs a client for the pub.devcloud.v1alpha1.SandboxService service.
// By default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped
// responses, and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewSandboxServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) SandboxServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &sandboxServiceClient{
		createSandbox: connect.NewClient[v1alpha1.CreateSandboxRequest, v1alpha1.CreateSandboxResponse](
			httpClient,
			baseURL+SandboxServiceCreateSandboxProcedure,
			connect.WithSchema(sandboxServiceCreateSandboxMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		getSandbox: connect.NewClient[v1alpha1.GetSandboxRequest, v1alpha1.GetSandboxResponse](
			httpClient,
			baseURL+SandboxServiceGetSandboxProcedure,
			connect.WithSchema(sandboxServiceGetSandboxMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// sandboxServiceClient implements SandboxServiceClient.
type sandboxServiceClient struct {
	createSandbox *connect.Client[v1alpha1.CreateSandboxRequest, v1alpha1.CreateSandboxResponse]
	getSandbox    *connect.Client[v1alpha1.GetSandboxRequest, v1alpha1.GetSandboxResponse]
}

// CreateSandbox calls pub.devcloud.v1alpha1.SandboxService.CreateSandbox.
func (c *sandboxServiceClient) CreateSandbox(ctx context.Context, req *connect.Request[v1alpha1.CreateSandboxRequest]) (*connect.Response[v1alpha1.CreateSandboxResponse], error) {
	return c.createSandbox.CallUnary(ctx, req)
}

// GetSandbox calls pub.devcloud.v1alpha1.SandboxService.GetSandbox.
func (c *sandboxServiceClient) GetSandbox(ctx context.Context, req *connect.Request[v1alpha1.GetSandboxRequest]) (*connect.Response[v1alpha1.GetSandboxResponse], error) {
	return c.getSandbox.CallUnary(ctx, req)
}

// SandboxServiceHandler is an implementation of the pub.devcloud.v1alpha1.SandboxService service.
type SandboxServiceHandler interface {
	CreateSandbox(context.Context, *connect.Request[v1alpha1.CreateSandboxRequest]) (*connect.Response[v1alpha1.CreateSandboxResponse], error)
	GetSandbox(context.Context, *connect.Request[v1alpha1.GetSandboxRequest]) (*connect.Response[v1alpha1.GetSandboxResponse], error)
}

// NewSandboxServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewSandboxServiceHandler(svc SandboxServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	sandboxServiceCreateSandboxHandler := connect.NewUnaryHandler(
		SandboxServiceCreateSandboxProcedure,
		svc.CreateSandbox,
		connect.WithSchema(sandboxServiceCreateSandboxMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	sandboxServiceGetSandboxHandler := connect.NewUnaryHandler(
		SandboxServiceGetSandboxProcedure,
		svc.GetSandbox,
		connect.WithSchema(sandboxServiceGetSandboxMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/pub.devcloud.v1alpha1.SandboxService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case SandboxServiceCreateSandboxProcedure:
			sandboxServiceCreateSandboxHandler.ServeHTTP(w, r)
		case SandboxServiceGetSandboxProcedure:
			sandboxServiceGetSandboxHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedSandboxServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedSandboxServiceHandler struct{}

func (UnimplementedSandboxServiceHandler) CreateSandbox(context.Context, *connect.Request[v1alpha1.CreateSandboxRequest]) (*connect.Response[v1alpha1.CreateSandboxResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("pub.devcloud.v1alpha1.SandboxService.CreateSandbox is not implemented"))
}

func (UnimplementedSandboxServiceHandler) GetSandbox(context.Context, *connect.Request[v1alpha1.GetSandboxRequest]) (*connect.Response[v1alpha1.GetSandboxResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("pub.devcloud.v1alpha1.SandboxService.GetSandbox is not implemented"))
}
