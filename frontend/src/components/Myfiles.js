import React from 'react'
import './css/myfiles.css'



function Myfiles() {
  return (
    <div className='myfiles'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css" integrity="sha512-0/rEDduZGrqo4riUlwqyuHDQzp2D1ZCgH/gFIfjMIL5az8so6ZiXyhf1Rg8i6xsjv+z/Ubc4tt1thLigEcu6Ug==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div class="container flex-grow-1 light-style container-p-y">
    <div class="container-m-nx container-m-ny bg-lightest mb-3">
        
       

        <div class="file-manager-actions container-p-x py-2">
            <div>
                <button type="button" class="btn btn-primary mr-2"><i class="ion ion-md-cloud-upload"></i>&nbsp; Upload</button>
                <button type="button" class="btn btn-secondary icon-btn mr-2" disabled=""><i class="ion ion-md-cloud-download"></i></button>
                
            </div>
        </div>

        <hr class="m-0" />
    </div>

    <div class="file-manager-container file-manager-col-view">
        <div class="file-manager-row-header">
            <div class="file-item-name pb-2">Filename</div>
            <div class="file-item-changed pb-2">Changed</div>
        </div>

        <div class="file-item">
            <div class="file-item-icon file-item-level-up fas fa-level-up-alt text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                ..
            </a>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-folder text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Images
            </a>
            <div class="file-item-changed">02/13/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-folder text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Scripts
            </a>
            <div class="file-item-changed">02/14/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-folder text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Utils
            </a>
            <div class="file-item-changed">02/15/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-file-archive text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Archive.zip
            </a>
            <div class="file-item-changed">02/16/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon fab fa-js text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Build.js
            </a>
            <div class="file-item-changed">02/17/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-file-word text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Checklist.doc
            </a>
            <div class="file-item-changed">02/18/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon fab fa-html5 text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Index.html
            </a>
            <div class="file-item-changed">02/19/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-img" style={{'background-image': 'url(https://bootdey.com/img/Content/avatar/avatar1.png)'}}></div>
            <a href="javascript:void(0)" class="file-item-name">
                Image-1.jpg
            </a>
            <div class="file-item-changed">02/20/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-img" style={{'background-image': 'url(https://bootdey.com/img/Content/avatar/avatar6.png)'}}></div>
            <a href="javascript:void(0)" class="file-item-name">
                Image-2.png
            </a>
            <div class="file-item-changed">02/21/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-img" style={{'background-image': 'url(https://bootdey.com/img/Content/avatar/avatar6.png)'}}></div>
            <a href="javascript:void(0)" class="file-item-name">
                Image-3.gif
            </a>
            <div class="file-item-changed">02/22/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon fab fa-js text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Main.js
            </a>
            <div class="file-item-changed">02/23/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-file text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                MAKEFILE
            </a>
            <div class="file-item-changed">02/24/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-file-pdf text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Presentation.pdf
            </a>
            <div class="file-item-changed">02/25/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-file-alt text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                README.txt
            </a>
            <div class="file-item-changed">02/26/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon fab fa-css3 text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Style.css
            </a>
            <div class="file-item-changed">02/27/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-file-audio text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Test.mp3
            </a>
            <div class="file-item-changed">02/28/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>

        <div class="file-item">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon far fa-file-video text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                Tutorial.avi
            </a>
            <div class="file-item-changed">03/01/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Myfiles
