<script lang="ts">
import type { MenuItem } from 'primevue/menuitem';

import { defineComponent } from 'vue';
import PanelMenu from 'primevue/panelmenu/PanelMenu.vue';

export default defineComponent({
  name: 'PanelMenu',
  inheritAttrs: false,
  extends: PanelMenu,
  methods: {
    isSeparator(item: MenuItem) {
      return !!this.getItemProp(item, 'separator');
    }
  }
});
</script>

<template>
  <div :id="id" :class="cx('root')" v-bind="ptm('root')">
    <template v-for="(item, index) of model" :key="getPanelKey(index)">
      <template v-if="isItemVisible(item)">
        <div
          v-if="isSeparator(item)"
          :style="getItemProp(item, 'style')"
          :class="[cx('separator'), getItemProp(item, 'class')]"
          v-bind="ptm('separator')"
        />
        <div
          v-else
          :style="getItemProp(item, 'style')"
          :class="[cx('panel'), getItemProp(item, 'class')]"
          v-bind="ptm('panel')"
        >
          <div
            :id="getHeaderId(index)"
            :class="[cx('header', { item }), getItemProp(item, 'headerClass')]"
            :tabindex="isItemDisabled(item) ? -1 : tabindex"
            role="button"
            :aria-label="getItemLabel(item)"
            :aria-expanded="isItemActive(item)"
            :aria-controls="getContentId(index)"
            :aria-disabled="isItemDisabled(item)"
            @click="onHeaderClick($event, item)"
            @keydown="onHeaderKeyDown($event, item)"
            v-bind="getPTOptions('header', item, index)"
            :data-p-highlight="isItemActive(item)"
            :data-p-disabled="isItemDisabled(item)"
          >
            <div :class="cx('headerContent')" v-bind="getPTOptions('headerContent', item, index)">
              <template v-if="!$slots.item">
                <a
                  :href="getItemProp(item, 'url')"
                  :class="cx('headerAction')"
                  :tabindex="-1"
                  v-bind="getPTOptions('headerAction', item, index)"
                >
                  <slot v-if="getItemProp(item, 'items')" name="submenuicon" :active="isItemActive(item)">
                    <component
                      :is="isItemActive(item) ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                      :class="cx('submenuIcon')"
                      v-bind="getPTOptions('submenuIcon', item, index)"
                    />
                  </slot>
                  <component
                    v-if="$slots.headericon"
                    :is="$slots.headericon"
                    :item="item"
                    :class="[cx('headerIcon'), getItemProp(item, 'icon')]"
                  />
                  <span
                    v-else-if="getItemProp(item, 'icon')"
                    :class="[cx('headerIcon'), getItemProp(item, 'icon')]"
                    v-bind="getPTOptions('headerIcon', item, index)"
                  />
                  <span :class="cx('headerLabel')" v-bind="getPTOptions('headerLabel', item, index)">
                    {{ getItemLabel(item) }}
                  </span>
                </a>
              </template>
              <component
                v-else
                :is="$slots.item"
                :item="item"
                :root="true"
                :active="isItemActive(item)"
                :hasSubmenu="getItemProp(item, 'items')"
                :label="getItemLabel(item)"
                :props="getMenuItemProps(item, index)"
              ></component>
            </div>
          </div>
          <transition name="p-toggleable-content" v-bind="ptm('transition')">
            <div
              v-show="isItemActive(item)"
              :id="getContentId(index)"
              :class="cx('toggleableContent')"
              role="region"
              :aria-labelledby="getHeaderId(index)"
              v-bind="ptm('toggleableContent')"
            >
              <div v-if="getItemProp(item, 'items')" :class="cx('menuContent')" v-bind="ptm('menuContent')">
                <PanelMenuList
                  :panelId="getPanelId(index)"
                  :items="getItemProp(item, 'items')"
                  :templates="$slots"
                  :expandedKeys="expandedKeys"
                  @item-toggle="changeExpandedKeys"
                  @header-focus="updateFocusedHeader"
                  :pt="pt"
                  :unstyled="unstyled"
                />
              </div>
            </div>
          </transition>
        </div>
      </template>
    </template>
  </div>
</template>
