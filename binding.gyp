{
  "targets": [
    {
      "target_name": "IrSdkNodeBindings",
      "cflags": [ "-Wall", "-std=c++11" ],
      "sources": [ 
        "src/cpp/IrSdkNodeBindings.cpp", 
        "src/cpp/IrSdkCommand.cpp", 
        "src/cpp/IRSDKWrapper.cpp", 
        "src/cpp/IrSdkBindingHelpers.cpp" 
      ],
      "include_dirs" : [
          "<!(node -e \"require('nan')\")"
      ],
      "defines": [
        "NAPI_DISABLE_CPP_EXCEPTIONS",
      ],
      "default_configuration": "Release",
      "configurations": {
        "Release": { 
          "msvs_settings": {
            "VCCLCompilerTool": {
                "ExceptionHandling": 1
            }
          }
        }
      }
    }
  ],
  "variables": {
    "standalone_static_library": 1,
  }
}