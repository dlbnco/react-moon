{
  description = "Development environment";

  inputs = {
    nixpkgs = { url = "github:NixOS/nixpkgs/nixpkgs-unstable"; };
    flake-utils = { url = "github:numtide/flake-utils"; };
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        inherit (nixpkgs.lib) optional;
        pkgs = import nixpkgs { inherit system; };

      in {
        devShell = pkgs.mkShell {
          packages = [
            pkgs.nodejs
            pkgs.yarn
            pkgs.nodePackages.typescript
            pkgs.nodePackages.typescript-language-server
            pkgs.nodePackages.diagnostic-languageserver
            pkgs.nodePackages.vscode-css-languageserver-bin
            pkgs.nodePackages.vscode-langservers-extracted
            pkgs.nodePackages.prettier
            pkgs.nodePackages.eslint_d
          ];
        };
      });
}
