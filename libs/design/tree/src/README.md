# Tree
`DaffTreeComponent` is used to display hierarchial data.
s
## Usage
```
<daff-tree>
  <daff-tree-item>
	  <div daffTreeItemTitle>Design</div>
	  <daff-tree-item>
        <div daffTreeItemTitle>Foundations</div>
        <a daff-tree-item [active]="rla.isActive" routerLink="/tree" routerLinkActive #rla="routerLinkActive">
          <span daffTreeItemTitle>Color</span>
        </a>
        <a daff-tree-item routerLink="/tree">
          <span daffTreeItemTitle>Typography</span>
        </a>
      </daff-tree-item>
      <daff-tree-item>
			<div daffTreeItemTitle>Components</div>
			<daff-tree-item>
				<span daffTreeItemTitle>Atoms</span>
				<a daff-tree-item>
					<span daffTreeItemTitle>Button</span>
				</a>
				<a daff-tree-item>
					<span daffTreeItemTitle>Checkbox</span>
				</a>
			</daff-tree-item>
		</daff-tree-item>
	</daff-tree-item>
	<daff-tree-item>
		<div daffTreeItemTitle>Packages</div>
		<daff-tree-item>
			<div daffTreeItemTitle>@daffodil/authorizenet</div>
			<daff-tree-item>
				<span daffTreeItemTitle>Overview</span>
			</daff-tree-item>
			<a daff-tree-item>
				<span daffTreeItemTitle>Installation</span>
			</a>
		</daff-tree-item>
		<a daff-tree-item>
			<span daffTreeItemTitle>@daffodil/cart</span>
		</a>
		<a daff-tree-item>
			<span daffTreeItemTitle>@daffodil/category</span>
		</a>
	</daff-tree-item>
</daff-tree>
```
