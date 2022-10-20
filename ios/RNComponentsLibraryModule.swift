//
//  RNComponentsLibraryModule.swift
//  RNComponentsLibraryModule
//
//  Copyright © 2022 Luana Ferreira Marques. All rights reserved.
//

import Foundation

@objc(RNComponentsLibraryModule)
class RNComponentsLibraryModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
