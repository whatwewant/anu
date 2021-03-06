import React from "../../../../ReactWX";
import './index.less';
class P extends React.Component {
    constructor(props) {
        
       
    }
    config = {
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "#fff",
        "navigationBarBackgroundColor": "#0088a4",
        "navigationBarTitleText": "view demo",
        "backgroundColor": "#eeeeee",
        "backgroundTextStyle": "light"
    }
    render() {
        return (
            <view class='container'>
                <view class="section">
                    <view class="section__title">flex-direction: row</view>
                    <view class="flex-wrp" style="flex-direction:row;">
                        <view class="flex-item bc_green">1</view>
                        <view class="flex-item bc_red">2</view>
                        <view class="flex-item bc_blue">3</view>
                    </view>
                    </view>
                    <view class="section">
                    <view class="section__title">flex-direction: column</view>
                    <view class="flex-wrp" style="height: 300px;flex-direction:column;">
                        <view class="flex-item bc_green">1</view>
                        <view class="flex-item bc_red">2</view>
                        <view class="flex-item bc_blue">3</view>
                    </view>
                </view>
            </view>
        );
    }
}
Page(React.createPage(P, "pages/demo/view/view/index"));
export default P;
