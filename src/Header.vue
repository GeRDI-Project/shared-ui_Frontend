<template>
    <div class="cover bg-info">
        <div class="navbar">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><b>brands</b></a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-ex-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cover-image cover-imger" ></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="text-inverse">Heading from ecternal component module</h1>
                    <p class="text-inverse">Text from ecternal component module</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['user', 'main'],
        data() {
            return {
                timer: '',
                isInInfo: false,
                showPopup: false,
            }
        },
        methods: {
            hover: () => {
                this.timer = setTimeout(() => this.showPopover(), 600)
            },
            hoverOut: () => {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    if ( ! this.isInInfo) {
                        this.closePopover();
                    }
                }, 200);
            },
            hoverInfo: () => this.isInInfo = true,
            hoverOutInfo: () => {
                this.isInInfo = false;
                this.hoverOut()
            },
            showPopover: () => this.showPopup = true,
            closePopover: () => this.showPopup = false,
        }
    }
</script>